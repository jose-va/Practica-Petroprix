'use client'

import  { FC } from 'react';
import { Button, Form, Input} from 'antd';
import { message, notification } from 'antd';
import { createClient } from '../Infrastructure';
import { useRouter } from 'next/navigation';
import { ClientFormComponentProps } from '../interface';
import { updateClient } from '../Infrastructure';

const ClientFormComponent: FC<ClientFormComponentProps> = ({data}) => {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleSubmit= async(values:any) => {
    try{
      if (data){
      const payload = { 
          ...values,
          id: data.id, 
          cifNifNie: data.cifNifNie, 
        }
      await updateClient(payload)
      message.success('Cliente actualizado correctamente')
      }else{
        await createClient(values);
        message.success('Se ha creado un nuevo cliente')
      }
      router.push('/client');
    }catch (error){
      notification.error({
        message: 'ERROR: ' + error,
        description: 'No se pudo enviar el formulario',
        placement: 'topRight',
      })
    }   
  }
        
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={data ? {...data} : {}}
      onFinish={handleSubmit}
    >
    <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">{data ? "Actualizar cliente" : "Nuevo cliente"}</h1>
      <Form.Item label="Nombre" name="name" tooltip="Este campo es obligatorio" rules={[{ required: true, message: 'Nombre no válido' }]}>
        <Input placeholder="Jose Manuel" />
      </Form.Item>
       { !data && 
       <Form.Item label="DNI" name="cifNifNie" tooltip="Este campo es obligatorio" rules={[{ required: true, message: 'DNI no válido' }]}>
        <Input placeholder="26051552G" />
      </Form.Item>
       }
      <Form.Item label="Email" name="email" tooltip="Este campo es obligatorio" rules={[{ required: true, type: 'email', message: 'Email no válido' }]}>
        <Input placeholder="josemanuel.vilchez@petroprix.com" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType='submit'>Enviar</Button>
      </Form.Item>
    </Form>
  )
}

export default ClientFormComponent