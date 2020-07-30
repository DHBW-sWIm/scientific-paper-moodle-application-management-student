<template>
  <div class="container">
    <h2>Betreuerdaten</h2>
    <div
      class="alert alert-success"
      role="alert"
    >Bitte wählen Sie hier einen wissenschaftlichen Betreuer für Ihre PA II / PA III und geben Sie die Kontaktdaten Ihres Unternehmensbetreuers an.</div>
    <table class="table" v-for="course in courses" :key="course.id">
      <thead>
        <tr>
          <th scope="col">Typ</th>
          <th scope="col">Deadline</th>
          <th scope="col">Abgabe erfolgt</th>
          <th scope="col">Betreuerdaten</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="assignment in course.assignments" :key="assignment.id">
          <td>{{ getType(assignment.name) }}</td>
          <td>{{ new Date(parseInt(assignment.duedate)*1000 ).toLocaleDateString()}}</td>
          <td>
            <span class="badge badge-success">Erfolgt</span>
          </td>
          <td>
            <button
              class="btn btn-primary"
              type="button"
              @click="changeData(assignment)"
            >Daten ändern</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="modal fade"
      id="modalStudents"
      ref="modalStudents"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalStudents"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Dieser wissenschaftlichen Arbeit zugewiesene Betreuer</h5>
          </div>
          <div class="modal-body">
            <div class="container">
              <form>
                <h6>Unternehmensbetreuer</h6>
                <div class="form-row">
                  <div class="col-md-4 mb-3">
                    <label for="validationServer01">Vorname</label>
                    <input
                      type="text"
                      class="form-control"
                      v-bind:class="{'is-valid': newCombination['corporateFirstValid'],  'is-invalid': !newCombination['corporateFirstValid']}"
                      @input="newCombination.corporateFirst.length != '' ? newCombination['corporateFirstValid'] = true :  newCombination['corporateFirstValid'] = false"
                      id="validationServer01"
                      placeholder="Vorname"
                      v-model="newCombination.corporateFirst"
                      required
                    />
                    <div class="valid-feedback">Sieht gut aus!</div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="validationServer02">Nachname</label>
                    <input
                      type="text"
                      class="form-control"
                      v-bind:class="{'is-valid': newCombination['corporateLastValid'],  'is-invalid': !newCombination['corporateLastValid']}"
                      @input="newCombination.corporateLast.length != '' ? newCombination['corporateLastValid'] = true :  newCombination['corporateLastValid'] = false"
                      id="validationServer02"
                      placeholder="Nachname"
                      v-model="newCombination.corporateLast"
                      required
                    />
                    <div class="valid-feedback">Sieht gut aus!</div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="validationServerUsername">E-Mail</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend3">@</span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="validationServerUsername"
                        placeholder="E-Mail"
                        aria-describedby="inputGroupPrepend3"
                        v-bind:class="{'is-valid': newCombination['corporatepartnermailValid'],  'is-invalid': !newCombination['corporatepartnermailValid']}"
                        @input="newCombination.corporatepartnermail.includes('@')  ? newCombination['corporatepartnermailValid'] = true :  newCombination['corporatepartnermailValid'] = false"
                        v-model="newCombination.corporatepartnermail"
                        required
                      />
                      <div
                        class="invalid-feedback"
                      >Bitte tragen Sie die E-Mail Ihres Unternehmensbetreuers ein.</div>
                    </div>
                  </div>
                </div>
                <hr />
                <h6>Wissenschaftlicher Betreuer</h6>
                <div class="form-row">
                  <div class="col-md-6 mb-3">
                    <label for="supervisors">Aktueller wiss. Betreuer</label>
                    <p>{{currentSupervisor}}</p>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="supervisors">Neuer wiss. Betreuer</label>

                    <select
                      name="supervisors"
                      id="supervisors"
                      class="form-control form-control-sm mt-2"
                      v-model="newCombination.supervisorid"
                    >
                      <option value="NULL" />
                      <option
                        v-for="supervisor in supervisors"
                        :key="supervisor.id"
                        :value="supervisor.id"
                      >{{ supervisor.firstname }} {{ supervisor.lastname }}</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click="saveData"
            >Änderungen sichern</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Schließen</button>
          </div>
        </div>
      </div>
    </div>
    <Infotoast ref="infotoastref" :message="toastmessage" />
    <Docusign ref="docusigner"></Docusign>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import Infotoast from "@/components/Infotoast.vue";
import Docusign from "@/components/Docusign.vue";
export default {
  name: "Assign",
  components: {
    Infotoast,
    Docusign,
  },
  data() {
    return {
      students: [],
      showModal: false,
      supervisors: [],
      courses: [],
      selectedAssignment: "",
      toastmessage: "",
      url: "",
      currentSupervisor: "",
      currentUserData: {},
      selectedAssignmentCorpSupervisor: {},
      corpSupervisorData: [],
      newCombination: {
        corporateFirst: "",
        corporateLast: "",
        corporatepartnername: "",
        corporatepartnermail: "",
        assignid: 0,
        studentid: 0,
        studentname: "",
        supervisorid: "",
        supervisorname: "",
      },
    };
  },
  props: {
    token: {
      type: String,
      default: "",
    },
  },
  beforeCreate: function () {},
  mounted() {
    this.getSupervisors();
    this.getCourses();
    this.getCurrentUserInfo();
    this.getCorpSupervisorInfos();
  },
  created() {},
  methods: {
    getCorpSupervisorInfos() {
      this.$emit("loading", "10%", false);
      var axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      };
      axios
        .get(
          (process.env.VUE_APP_MOODEL_URL || "") +
            "/webservice/rest/server.php",
          {
            params: {
              wstoken: this.token,
              wsfunction: "local_spsupman_get_studenthascorpsupervisor",
              moodlewsrestformat: "json",
            },
          },
          axiosConfig
        )
        .then((response) => {
          this.$emit("loading", "90%", false);

          if (!response.exception) {
            this.corpSupervisorData = response.data;
            this.$emit("loading", "100%", true);
          }
        })
        .catch((error) => {
          console.log(error); // eslint-disable-line
          this.$emit("loading", "100%", true);
          this.$emit("ajaxerror");
        });
    },
    getCurrentUserInfo() {
      this.$emit("loading", "10%", false);
      var axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      };
      axios
        .get(
          (process.env.VUE_APP_MOODEL_URL || "") +
            "/webservice/rest/server.php",
          {
            params: {
              wstoken: this.token,
              wsfunction: "core_webservice_get_site_info",
              moodlewsrestformat: "json",
            },
          },
          axiosConfig
        )
        .then((response) => {
          this.$emit("loading", "90%", false);

          if (!response.exception) {
            this.currentUserData = response.data;
            this.$emit("loading", "100%", true);
          }
        })
        .catch((error) => {
          console.log(error); // eslint-disable-line
          this.$emit("loading", "100%", true);
          this.$emit("ajaxerror");
        });
    },
    getType(dropboxName) {
      if (/\b.*Abgabe PA \d\b/.test(dropboxName)) {
        switch (dropboxName.substr(-1)) {
          case "1":
            return "PA I";
          case "2":
            return "PA II";
          case "3":
            return "PA III";
          default:
            return "Ungültige Angabe";
        }
      } else {
        return "Ungültige Angabe";
      }
    },
    signature(event, studentid) {
      this.$emit("loading", "10%", false);
      var axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      };
      axios
        .get(
          (process.env.VUE_APP_MOODEL_URL || "") +
            "/webservice/rest/server.php",
          {
            params: {
              wstoken: this.token,
              wsfunction: "mod_assign_get_submissions",
              moodlewsrestformat: "json",
              "assignmentids[0]": this.selectedAssignment,
            },
          },
          axiosConfig
        )
        .then((response) => {
          this.$emit("loading", "90%", false);
          var urlToOpen = "";
          if (!response.exception && response.data.assignments.length == 1) {
            for (
              let i = 0;
              i < response.data.assignments[0].submissions.length;
              i++
            ) {
              const element = response.data.assignments[0].submissions[i];
              if (element.userid == studentid) {
                for (let j = 0; j < element.plugins.length; j++) {
                  const fileElement = element.plugins[j];
                  if (
                    fileElement.type == "file" &&
                    fileElement.fileareas.length == 1 &&
                    fileElement.fileareas[0].files.length == 1
                  ) {
                    const webserviceUrl =
                      fileElement.fileareas[0].files[0].fileurl;
                    const publicUrl = webserviceUrl.replace("webservice/", "");
                    urlToOpen = publicUrl;
                  }
                }
              }
            }
            if (urlToOpen != "") {
              this.$refs.docusigner.signApi(urlToOpen);
            } else {
              event.target.innerHTML = "n.A.";
              event.target.disabled = true;
            }
            this.$emit("loading", "100%", true);
          }
        })
        .catch((error) => {
          console.log(error); // eslint-disable-line
          this.$emit("loading", "100%", true);
          this.$emit("ajaxerror");
        });
    },
    getSupervisorNameById(id) {
      var supname = "Not found";
      for (let i = 0; i < this.supervisors.length; i++) {
        const element = this.supervisors[i];
        if (element.id == id) {
          supname = element.firstname + " " + element.lastname;
        }
      }
      return supname;
    },
    saveData() {
      this.newCombination.assignid = this.selectedAssignment;
      this.newCombination.studentid = this.currentUserData.userid;
      this.newCombination.studentname = this.currentUserData.fullname;
      this.newCombination.corporatepartnername =
        this.newCombination.corporateFirst +
        " " +
        this.newCombination.corporateLast;
      this.newCombination.supervisorname = this.getSupervisorNameById(
        this.newCombination.supervisorid
      );
      var jsonData = {
        changes: [this.newCombination],
      };

      var data = {
        variables: {
          dbchanges: {
            value: JSON.stringify(jsonData),
            type: "String",
          },
        },
      };
      this.$emit("loading", "10%", false);
      axios
        .post(
          (process.env.VUE_APP_CAMUNDA_URL ||
            "https://camunda.scientific-paper.swimdhbw.de/") +
            "engine-rest/process-definition/key/signing_ceremony/start",
          data,
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        )
        .then((response) => {
          this.$emit("loading", "100%", true);
          if (response.status == 200) {
            this.toastmessage = "Die Zuordnung wurde erfolgreich angefordert.";
          } else {
            this.toastmessage =
              "Bei der Anforderung der Zuordnung ist ein Fehler aufgetreten.";
          }
          this.$refs.infotoastref.open();
        });
    },
    mapSupervisorName(id) {
      var name = "";
      for (let i = 0; i < this.supervisors.length; i++) {
        if (this.supervisors[i].id == id) {
          name =
            this.supervisors[i].firstname + " " + this.supervisors[i].lastname;
        }
      }
      return name;
    },
    changeData(assignment) {
      var aid = assignment.course;
      this.selectedAssignment = assignment.id;
      this.$emit("loading", "10%", false);
      this.students = [];
      var axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      };
      axios
        .get(
          (process.env.VUE_APP_MOODEL_URL || "") +
            "/webservice/rest/server.php",
          {
            params: {
              wstoken: this.token,
              wsfunction: "core_enrol_get_enrolled_users",
              moodlewsrestformat: "json",
              courseid: aid,
            },
          },
          axiosConfig
        )
        .then((response) => {
          if (!response.exception) {
            this.students = this.filterStudents(response.data);
            axios
              .get(
                (process.env.VUE_APP_MOODEL_URL || "") +
                  "/webservice/rest/server.php",
                {
                  params: {
                    wstoken: this.token,
                    wsfunction: "local_spsupman_get_studenthassupervisor",
                    moodlewsrestformat: "json",
                  },
                },
                axiosConfig
              )
              .then((respo) => {
                if (!respo.exception) {
                  for (let i = 0; i < respo.data.length; i++) {
                    for (let j = 0; j < this.students.length; j++) {
                      if (
                        this.students[j].id == respo.data[i].studentid &&
                        respo.data[i].assignmentid == this.selectedAssignment
                      ) {
                        this.currentSupervisor = this.mapSupervisorName(
                          respo.data[i].supervisorid
                        );
                      }
                    }
                  }
                  for (let i = 0; i < this.corpSupervisorData.length; i++) {
                    if (
                      this.corpSupervisorData[i].assignmentid ==
                      this.selectedAssignment
                    ) {
                      this.newCombination.corporatepartnermail = this.corpSupervisorData[
                        i
                      ].cpsupervisormail;
                      this.newCombination.corporatepartnermailValid = true;
                      this.newCombination.corporateLast = this.corpSupervisorData[
                        i
                      ].cpsupervisorlast;
                      this.newCombination.corporateLastValid = true;
                      this.newCombination.corporateFirst = this.corpSupervisorData[
                        i
                      ].cpsupervisorfirst;
                      this.newCombination.corporateFirstValid = true;
                    }
                  }
                  $("#modalStudents").modal("show");
                  this.$emit("loading", "100%", true);
                }
              })
              .catch((error) => {
                console.log(error); // eslint-disable-line
                this.$emit("loading", "100%", true);
                this.$emit("ajaxerror");
              });
          }
        })
        .catch((error) => {
          console.log(error); // eslint-disable-line
          this.$emit("loading", "100%", true);
          this.$emit("ajaxerror");
        });
    },
    getSupervisors: function () {
      this.$emit("loading", "10%", false);
      this.supervisors = [];
      var axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      };
      axios
        .get(
          (process.env.VUE_APP_MOODEL_URL || "") +
            "/webservice/rest/server.php",
          {
            params: {
              wstoken: this.token,
              wsfunction: "local_spsupman_get_supervisors",
              moodlewsrestformat: "json",
            },
          },
          axiosConfig
        )
        .then((response) => {
          if (!response.data.exception) {
            this.supervisors = response.data;
            this.$emit("loading", "100%", true);
          } else {
            this.$emit("loading", "100%", true);
            this.$emit("ajaxerror");
          }
        })
        .catch((error) => {
          console.log(error); // eslint-disable-line
          this.$emit("loading", "100%", true);
          this.$emit("ajaxerror");
        });
    },
    filterStudents(allStudents) {
      var filteredStudents = [];
      for (let i = 0; i < allStudents.length; i++) {
        var isStudent = false;
        for (let j = 0; j < allStudents[i].roles.length; j++) {
          if (allStudents[i].roles[j].roleid == 5) {
            isStudent = true;
          }
        }
        if (isStudent) {
          allStudents[i].currentSupervisor = "";
          allStudents[i].changed = false;
          allStudents[i].newSupervisor = "";
          filteredStudents.push(allStudents[i]);
        }
      }
      return filteredStudents;
    },
    getCourses: function () {
      this.$emit("loading", "10%", false);
      var axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      };
      axios
        .get(
          (process.env.VUE_APP_MOODEL_URL || "") +
            "/webservice/rest/server.php",
          {
            params: {
              wstoken: this.token,
              wsfunction: "mod_assign_get_assignments",
              moodlewsrestformat: "json",
            },
          },
          axiosConfig
        )
        .then((response) => {
          this.$emit("loading", "100%", true);

          if (!response.exception) {
            this.courses = response.data.courses;
          }
        })
        .catch((error) => {
          this.$emit("loading", "100%", true);
          this.$emit("ajaxerror");
          console.log(error); // eslint-disable-line
        });
    },
  },
};
</script>