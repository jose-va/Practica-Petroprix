'use client'

import React, { useState } from 'react';
import { Button, Form, Input} from 'antd';
import type { FormProps } from 'antd';
import { message, notification } from 'antd';
import { updateMerchant } from '../Infrastructure';
import { useRouter } from 'next/navigation';
import { ClientType } from '../../ClientPageComponent/Delivery/interface';

type RequiredMark = boolean | 'optional' | 'customize';

const MerchantEditComponent: React.FC<any> = ({previousData}) => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMark] = useState<RequiredMark>('optional');

  const router = useRouter();

  const onRequiredTypeChange: FormProps<any>['onValuesChange'] = ({ requiredMarkValue }) => {
    setRequiredMark(requiredMarkValue);
  }

  const handleCreate= async() => {
    try{
      const data= await form.validateFields();
      const newData= {
        ...data,
        id: previousData.id,
        }
      await updateMerchant(newData);


      message.success('Comerciante creado correctamente');
      router.push('/merchant');
    }catch (error){
      notification.error({
        message: 'ERROR: ' + error,
        description: 'No se pudo crear al comerciante',
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
    <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Editar comerciante</h1>
      <Form.Item label="Nombre" name="name" tooltip="Este campo es obligatorio" rules={[{ required: true, message: 'Nombre no válido' }]}>
        <Input/>
      </Form.Item>
      <Form.Item label="Dirección" name="address" tooltip="Este campo es obligatorio" rules={[{ required: true, message: 'La dirección no es válida' }]}>
        <Input/>
      </Form.Item>
      <Form.Item label="Tipo" name="merchantType" tooltip="Este campo es obligatorio" rules={[{ required: true, type: 'email', message: 'Por favor, indique el tipo de comerciante' }]}>
        <Input/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleCreate}>Enviar</Button>
      </Form.Item>
    </Form>
  );
};

export default MerchantEditComponent;