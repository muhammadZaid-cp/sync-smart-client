import { Form, Modal, Select } from "antd";
import React, { useState } from "react";
import CustomInput from "../../uiComponents/InputField";
import Btn from "../../uiComponents/Btn";

function KnowledgeBaseModal({ isOpen, closeModal, selectedItem }) {
  const [apiLoading, setApiLoading] = useState(false);
  const [form] = Form.useForm();

  const options1 = [
    { option: "tag1", value: 10 },
    { option: "tag2", value: 20 },
    { option: "tag3", value: 130 },
    { option: "tag4", value: 410 },
  ];

  const options2 = [
    { option: "Text", value: 10 },
    { option: "file", value: 20 },
    { option: "image", value: 130 },
  ];

  const handleContinue = () => {
    closeModal();
    console.log("hello");
  };

  return (
    <Modal
      title={null}
      centered
      open={isOpen}
      footer={null}
      className="rounded-full"
      width={650}
      onOk={closeModal}
      onCancel={closeModal}
    >
      <p className="text-[#433E3F] text-lg w-full px-4 pb-2 border-b border-[#898384]">
        {selectedItem ? "Edit" : "Add new"} Datashource
      </p>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleContinue}
        className="w-full mt-4"
        initialValues={selectedItem}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input  Name.!",
            },
          ]}
        >
          <CustomInput type="text" placeholder="Name of the datasource" />
        </Form.Item>
        <Form.Item name="tag" label="Tags">
          <Select
            mode="multiple"
            size="large"
            placeholder="tags list"
            options={options1}
          />
        </Form.Item>

        <Form.Item
          name="type"
          label="Type"
          rules={[
            {
              required: true,
              message: "Please select type.!",
            },
          ]}
        >
          <Select
            size="large"
            placeholder="Choose an option"
            options={options2}
          />
        </Form.Item>

        <Form.Item
          name="url"
          label="URL"
          rules={[
            {
              required: true,
              message: "Please input your url!",
            },
          ]}
        >
          <CustomInput type="text" placeholder="Enter the Url" />
        </Form.Item>

        <Form.Item className="mb-0 ml-auto w-[8rem] self-end">
          <Btn
            type="submit"
            color="primary"
            text="Add Datasource"
            isLoading={apiLoading}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default KnowledgeBaseModal;
