'use client'

import React, { useState } from 'react';
import { Button, Form, Input} from 'antd';
import type { FormProps } from 'antd';
import { message, notification } from 'antd';
import { createClient } from '../Infrastructure';
import { useRouter } from 'next/navigation';

type RequiredMark = boolean | 'optional' | 'customize';

const ClientFormComponent: React.FC = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMark] = useState<RequiredMark>('optional');

  const router = useRouter();

  const onRequiredTypeChange: FormProps<any>['onValuesChange'] = ({ requiredMarkValue }) => {
    setRequiredMark(requiredMarkValue);
  }

  const handleCreate= async() => {
      try{
        const data= await form.validateFields();
        await createClient(data);
        form.resetFields();
        message.success('Cliente creado correctamente');
        router.push('/client');
      }catch (error){
        notification.error({
                message: 'ERROR: ' + error,
                description: 'No se pudo crear al cliente',
                placement: 'topRight',
        });
      }
    }
        
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ requiredMarkValue: requiredMark }}
      onValuesChange={onRequiredTypeChange}
    >
    <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Nuevo cliente</h1>
      <Form.Item label="Nombre" name="name" tooltip="Este campo es obligatorio" rules={[{ required: true, message: 'Nombre no válido' }]}>
        <Input placeholder="Jose Manuel" />
      </Form.Item>
      <Form.Item label="DNI" name="cifNifNie" tooltip="Este campo es obligatorio" rules={[{ required: true, message: 'DNI no válido' }]}>
        <Input placeholder="26051552G" />
      </Form.Item>
      <Form.Item label="Email" name="email" tooltip="Este campo es obligatorio" rules={[{ required: true, type: 'email', message: 'Email no válido' }]}>
        <Input placeholder="josemanuel.vilchez@petroprix.com" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleCreate}>Enviar</Button>
      </Form.Item>
    </Form>
  );
};

export default ClientFormComponent;