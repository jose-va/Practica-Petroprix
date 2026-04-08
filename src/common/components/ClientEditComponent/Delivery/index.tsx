'use client'

import React, { useState } from 'react';
import { Button, Form, Input} from 'antd';
import type { FormProps } from 'antd';
import { message, notification } from 'antd';
import { updateClient } from '../Infrastructure';
import { useRouter } from 'next/navigation';

type RequiredMark = boolean | 'optional' | 'customize';

const ClientEditComponent: React.FC<any> = ({previousData}) => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMark] = useState<RequiredMark>('optional');

  const router = useRouter();

  const onRequiredTypeChange: FormProps<any>['onValuesChange'] = ({ requiredMarkValue }) => {
    setRequiredMark(requiredMarkValue);
  }

  const handleUpdate= async() => {
      try{
        const data= await form.validateFields();
        const newData = { 
            ...data,
            id: previousData.id, 
            cifNifNie: previousData.cifNifNie, 
        }
        await updateClient(newData);

        message.success('Cliente actualizado correctamente');
        router.push('/client');
      }catch (error){
        notification.error({
                message: 'ERROR: ' + error,
                description: 'No se pudo actualizar al cliente',
                placement: 'topRight',
        });
      }
    }
        
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ ...previousData, requiredMarkValue: requiredMark }}
      onValuesChange={onRequiredTypeChange}
    >
    <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Editar cliente</h1>
      <Form.Item label="Nombre" name="name" tooltip="Este campo es obligatorio" rules={[{ required: true, message: 'Nombre no válido' }]}>
        <Input placeholder="Jose Manuel" />
      </Form.Item>
      <Form.Item label="Email" name="email" tooltip="Este campo es obligatorio" rules={[{ required: true, type: 'email', message: 'Email no válido' }]}>
        <Input placeholder="josemanuel.vilchez@petroprix.com" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleUpdate}>Actualizar</Button>
      </Form.Item>
    </Form>
  );
};

export default ClientEditComponent;