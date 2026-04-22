'use client'

import { FC } from 'react';
import { Button, Form, Input, message, notification } from 'antd'; // Añadimos Select
import { createClient, updateClient } from '../Infrastructure';
import { useRouter } from 'next/navigation';
import { ClientFormComponentProps } from '../interface';

const ClientFormComponent: FC<ClientFormComponentProps> = ({ data }) => {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    try {
      if (data) {
        const payload = {
          ...values,
          id: data.id,
          cifNifNie: data.cifNifNie,
        };
        await updateClient(payload);
        message.success('Cliente actualizado correctamente');
      } else {
        await createClient(values);
        message.success('Se ha creado un nuevo cliente');
      }
      router.push('/client');
    } catch (error) {
      notification.error({
        message: 'ERROR: ' + error,
        description: 'No se pudo enviar el formulario',
        placement: 'topRight',
      });
    }
  }

  return (
    <Form
      key={data?.id}
      form={form}
      layout="vertical"
      initialValues={data ? { ...data } : {}}
      onFinish={handleSubmit}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
        {data ? "Actualizar cliente" : "Nuevo cliente"}
      </h1>

      <Form.Item label="Nombre" name="name" rules={[{ required: true, message: 'El nombre es obligatorio' }]}>
        <Input placeholder="Jose Manuel" />
      </Form.Item>

      <Form.Item label="Nombre" name="surName" rules={[{ required: true, message: 'El apellido es obligatorio' }]}>
        <Input placeholder="Vilchez Arenas" />
      </Form.Item>

      <Form.Item label="Teléfono" name="phone" rules={[{ required: true, message: 'El teléfono es obligatorio' }]}>
        <Input placeholder="634897458" />
      </Form.Item>

      {!data && (
        <Form.Item label="DNI" name="cifNifNie" rules={[{ required: true, message: 'El DNI es obligatorio' }]}>
          <Input placeholder="26051552G" />
        </Form.Item>
      )}

      <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'El email es obligatorio' }]}>
        <Input placeholder="josemanuel.vilchez@petroprix.com" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType='submit'>Enviar</Button>
      </Form.Item>
    </Form>
  );
}

export default ClientFormComponent;