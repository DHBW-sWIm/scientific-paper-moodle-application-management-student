<?php
/**
 * JobResponse
 *
 * PHP version 5
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * sWIm Activiti REST API
 *
 * here be dragons
 *
 * OpenAPI spec version: v0.2.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace Swagger\Client\Model;

use \ArrayAccess;
use \Swagger\Client\ObjectSerializer;

/**
 * JobResponse Class Doc Comment
 *
 * @category Class
 * @package     Swagger\Client
 * @author      Swagger Codegen team
 * @link        https://github.com/swagger-api/swagger-codegen
 */
class JobResponse implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'JobResponse';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'id' => 'string',
        'url' => 'string',
        'process_instance_id' => 'string',
        'process_instance_url' => 'string',
        'process_definition_id' => 'string',
        'process_definition_url' => 'string',
        'execution_id' => 'string',
        'execution_url' => 'string',
        'retries' => 'int',
        'exception_message' => 'string',
        'due_date' => '\DateTime',
        'tenant_id' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'id' => null,
        'url' => null,
        'process_instance_id' => null,
        'process_instance_url' => null,
        'process_definition_id' => null,
        'process_definition_url' => null,
        'execution_id' => null,
        'execution_url' => null,
        'retries' => 'int32',
        'exception_message' => null,
        'due_date' => 'date-time',
        'tenant_id' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'id' => 'id',
        'url' => 'url',
        'process_instance_id' => 'processInstanceId',
        'process_instance_url' => 'processInstanceUrl',
        'process_definition_id' => 'processDefinitionId',
        'process_definition_url' => 'processDefinitionUrl',
        'execution_id' => 'executionId',
        'execution_url' => 'executionUrl',
        'retries' => 'retries',
        'exception_message' => 'exceptionMessage',
        'due_date' => 'dueDate',
        'tenant_id' => 'tenantId'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'id' => 'setId',
        'url' => 'setUrl',
        'process_instance_id' => 'setProcessInstanceId',
        'process_instance_url' => 'setProcessInstanceUrl',
        'process_definition_id' => 'setProcessDefinitionId',
        'process_definition_url' => 'setProcessDefinitionUrl',
        'execution_id' => 'setExecutionId',
        'execution_url' => 'setExecutionUrl',
        'retries' => 'setRetries',
        'exception_message' => 'setExceptionMessage',
        'due_date' => 'setDueDate',
        'tenant_id' => 'setTenantId'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'id' => 'getId',
        'url' => 'getUrl',
        'process_instance_id' => 'getProcessInstanceId',
        'process_instance_url' => 'getProcessInstanceUrl',
        'process_definition_id' => 'getProcessDefinitionId',
        'process_definition_url' => 'getProcessDefinitionUrl',
        'execution_id' => 'getExecutionId',
        'execution_url' => 'getExecutionUrl',
        'retries' => 'getRetries',
        'exception_message' => 'getExceptionMessage',
        'due_date' => 'getDueDate',
        'tenant_id' => 'getTenantId'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$swaggerModelName;
    }

    

    

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['url'] = isset($data['url']) ? $data['url'] : null;
        $this->container['process_instance_id'] = isset($data['process_instance_id']) ? $data['process_instance_id'] : null;
        $this->container['process_instance_url'] = isset($data['process_instance_url']) ? $data['process_instance_url'] : null;
        $this->container['process_definition_id'] = isset($data['process_definition_id']) ? $data['process_definition_id'] : null;
        $this->container['process_definition_url'] = isset($data['process_definition_url']) ? $data['process_definition_url'] : null;
        $this->container['execution_id'] = isset($data['execution_id']) ? $data['execution_id'] : null;
        $this->container['execution_url'] = isset($data['execution_url']) ? $data['execution_url'] : null;
        $this->container['retries'] = isset($data['retries']) ? $data['retries'] : null;
        $this->container['exception_message'] = isset($data['exception_message']) ? $data['exception_message'] : null;
        $this->container['due_date'] = isset($data['due_date']) ? $data['due_date'] : null;
        $this->container['tenant_id'] = isset($data['tenant_id']) ? $data['tenant_id'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {

        return true;
    }


    /**
     * Gets id
     *
     * @return string
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param string $id id
     *
     * @return $this
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets url
     *
     * @return string
     */
    public function getUrl()
    {
        return $this->container['url'];
    }

    /**
     * Sets url
     *
     * @param string $url url
     *
     * @return $this
     */
    public function setUrl($url)
    {
        $this->container['url'] = $url;

        return $this;
    }

    /**
     * Gets process_instance_id
     *
     * @return string
     */
    public function getProcessInstanceId()
    {
        return $this->container['process_instance_id'];
    }

    /**
     * Sets process_instance_id
     *
     * @param string $process_instance_id process_instance_id
     *
     * @return $this
     */
    public function setProcessInstanceId($process_instance_id)
    {
        $this->container['process_instance_id'] = $process_instance_id;

        return $this;
    }

    /**
     * Gets process_instance_url
     *
     * @return string
     */
    public function getProcessInstanceUrl()
    {
        return $this->container['process_instance_url'];
    }

    /**
     * Sets process_instance_url
     *
     * @param string $process_instance_url process_instance_url
     *
     * @return $this
     */
    public function setProcessInstanceUrl($process_instance_url)
    {
        $this->container['process_instance_url'] = $process_instance_url;

        return $this;
    }

    /**
     * Gets process_definition_id
     *
     * @return string
     */
    public function getProcessDefinitionId()
    {
        return $this->container['process_definition_id'];
    }

    /**
     * Sets process_definition_id
     *
     * @param string $process_definition_id process_definition_id
     *
     * @return $this
     */
    public function setProcessDefinitionId($process_definition_id)
    {
        $this->container['process_definition_id'] = $process_definition_id;

        return $this;
    }

    /**
     * Gets process_definition_url
     *
     * @return string
     */
    public function getProcessDefinitionUrl()
    {
        return $this->container['process_definition_url'];
    }

    /**
     * Sets process_definition_url
     *
     * @param string $process_definition_url process_definition_url
     *
     * @return $this
     */
    public function setProcessDefinitionUrl($process_definition_url)
    {
        $this->container['process_definition_url'] = $process_definition_url;

        return $this;
    }

    /**
     * Gets execution_id
     *
     * @return string
     */
    public function getExecutionId()
    {
        return $this->container['execution_id'];
    }

    /**
     * Sets execution_id
     *
     * @param string $execution_id execution_id
     *
     * @return $this
     */
    public function setExecutionId($execution_id)
    {
        $this->container['execution_id'] = $execution_id;

        return $this;
    }

    /**
     * Gets execution_url
     *
     * @return string
     */
    public function getExecutionUrl()
    {
        return $this->container['execution_url'];
    }

    /**
     * Sets execution_url
     *
     * @param string $execution_url execution_url
     *
     * @return $this
     */
    public function setExecutionUrl($execution_url)
    {
        $this->container['execution_url'] = $execution_url;

        return $this;
    }

    /**
     * Gets retries
     *
     * @return int
     */
    public function getRetries()
    {
        return $this->container['retries'];
    }

    /**
     * Sets retries
     *
     * @param int $retries retries
     *
     * @return $this
     */
    public function setRetries($retries)
    {
        $this->container['retries'] = $retries;

        return $this;
    }

    /**
     * Gets exception_message
     *
     * @return string
     */
    public function getExceptionMessage()
    {
        return $this->container['exception_message'];
    }

    /**
     * Sets exception_message
     *
     * @param string $exception_message exception_message
     *
     * @return $this
     */
    public function setExceptionMessage($exception_message)
    {
        $this->container['exception_message'] = $exception_message;

        return $this;
    }

    /**
     * Gets due_date
     *
     * @return \DateTime
     */
    public function getDueDate()
    {
        return $this->container['due_date'];
    }

    /**
     * Sets due_date
     *
     * @param \DateTime $due_date due_date
     *
     * @return $this
     */
    public function setDueDate($due_date)
    {
        $this->container['due_date'] = $due_date;

        return $this;
    }

    /**
     * Gets tenant_id
     *
     * @return string
     */
    public function getTenantId()
    {
        return $this->container['tenant_id'];
    }

    /**
     * Sets tenant_id
     *
     * @param string $tenant_id tenant_id
     *
     * @return $this
     */
    public function setTenantId($tenant_id)
    {
        $this->container['tenant_id'] = $tenant_id;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param  integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param  integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param  integer $offset Offset
     * @param  mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param  integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(
                ObjectSerializer::sanitizeForSerialization($this),
                JSON_PRETTY_PRINT
            );
        }

        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}

