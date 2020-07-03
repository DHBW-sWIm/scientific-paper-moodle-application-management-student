<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Prints a particular instance of spams
 *
 * You can have a rather longer description of the file as well,
 * if you like, and it can span multiple lines.
 *
 * @package    mod_spams
 * @copyright  2016 Your Name <your@email.address>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

// Replace spams with the name of your module and remove this line.

require_once(dirname(dirname(dirname(__FILE__))).'/config.php');
require_once(dirname(__FILE__).'/lib.php');
require_once(dirname(__FILE__).'/locallib.php');
require_once($CFG->libdir . '/externallib.php');
require_once($CFG->dirroot . "/webservice/lib.php");




$id = optional_param('id', 0, PARAM_INT); // Course_module ID, or
$n  = optional_param('n', 0, PARAM_INT);  // ... spams instance ID - it should be named as the first character of the module.

if ($id) {
    $cm         = get_coursemodule_from_id('spams', $id, 0, false, MUST_EXIST);
    $course     = $DB->get_record('course', array('id' => $cm->course), '*', MUST_EXIST);
    $spams  = $DB->get_record('spams', array('id' => $cm->instance), '*', MUST_EXIST);
} else if ($n) {
    $spams  = $DB->get_record('spams', array('id' => $n), '*', MUST_EXIST);
    $course     = $DB->get_record('course', array('id' => $spams->course), '*', MUST_EXIST);
    $cm         = get_coursemodule_from_instance('spams', $spams->id, $course->id, false, MUST_EXIST);
} else {
    error('You must specify a course_module ID or an instance ID');
}

require_login($course, true, $cm);

$event = \mod_spams\event\course_module_viewed::create(array(
    'objectid' => $PAGE->cm->instance,
    'context' => $PAGE->context,
));
$event->add_record_snapshot('course', $PAGE->course);
$event->add_record_snapshot($PAGE->cm->modname, $spams);
$event->trigger();

//---WEBSERVICE TOKEN CREATION
$selectedservice = $DB->get_record('external_services', array('shortname' => 'serviceweb', 'enabled' => 1));
require_login();
$userid = $USER->id;
//check the the user is allowed for the service
$webservicemanager = new webservice();
if ($selectedservice->restrictedusers) {
    $restricteduser = $webservicemanager->get_ws_authorised_user($service, $userid);
    if (empty($restricteduser)) {
        $allowuserurl = new moodle_url('/' . $CFG->admin . '/webservice/service_users.php',
                array('id' => $selectedservice->id));
        $allowuserlink = html_writer::tag('a', $selectedservice->name , array('href' => $allowuserurl));
        $errormsg = $OUTPUT->notification(get_string('usernotallowed', 'webservice', $allowuserlink));
    }
}
//check if the user is deleted. unconfirmed, suspended or guest
$user = $DB->get_record('user', array('id' => $userid));
if ($user->id == $CFG->siteguest or $user->deleted or !$user->confirmed or $user->suspended) {
    throw new moodle_exception('forbiddenwsuser', 'webservice');
}
//process the creation
if (empty($errormsg)) {
    $token = external_generate_token_for_current_user($selectedservice);
    $privatetoken = $token->privatetoken;
    external_log_token_request($token);
    $usertoken = new stdClass;
    $usertoken->token = $token->token;
    $usertoken->privatetoken = null;
}
//---END OF WEBSERVICE TOKEN CREATION


// Print the page header.
$PAGE->set_url('/mod/spams/view.php', array('id' => $cm->id));
$PAGE->set_title(format_string($spams->name));
$PAGE->set_heading(format_string($course->fullname));

// Output starts here.
echo $OUTPUT->header();
if (!empty($errormsg)) {
    echo $errormsg;
}

echo '<input type="hidden" id="webservicetoken" value="'.$usertoken->token.'">';
readfile("index.html");
// Finish the page.
echo $OUTPUT->footer();
