import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

function CustomForm(props) {

  function handleFormSubmit(event) {
      event.preventDefault();
      const title = event.target.elements.title.value;
      const content = event.target.elements.content.value;

      switch (props.requestType) {
          case 'post':
              axios.post('http://127.0.0.1:8000/api/', {'title': title, 'content': content})
                  .then(res=>console.log(res.statusText))
                  .catch(error=>console.log(error));
              break;
          case 'put':
              axios.put(`http://127.0.0.1:8000/api/${props.articleID}`, {'title':title, 'content': content})
                  .then(res=>console.log(res.statusText))
                  .catch(error=>console.log(error));
              break;
      }

      props.onSubmit({'title': title, 'content': content})
  }


  return (
    <div>
      <Form onSubmitCapture={handleFormSubmit} >
        <Form.Item label="Title">
          <Input name='title' placeholder="Input title here" />
        </Form.Item>
        <Form.Item name='content' label="Content">
          <Input placeholder="Input content here" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType='submit'>{props.buttonName}</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default CustomForm
