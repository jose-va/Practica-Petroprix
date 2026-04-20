'use client'

import { FC} from 'react';
import { Button, Form, Input} from 'antd';
import { message, notification } from 'antd';
import { createMerchant, updateMerchant } from '../Infrastructure';
import { useRouter } from 'next/navigation';
import { MerchantFormComponentProps } from '../interface';

const MerchantFormComponent: FC<MerchantFormComponentProps> = ({data}) => {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleSubmit= async(values: any) => {
    try{
        if (data){
          const payload = { 
          ...values,
          id: data.id 
        }
        await updateMerchant(payload)
        message.success('Cliente actualizado correctamente')
      }else{
        await createMerchant(values);
        message.success('Se ha creado un nuevo cliente')
      }
  
      router.push('/merchant');
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
    <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">{data ? "Actualizar comerciante" : "Nuevo comerciante"}</h1>
      <Form.Item label="Nombre" name="name" tooltip="Este campo es obligatorio" rules={[{ required: true, message: 'Nombre no válido' }]}>
        <Input/>
      </Form.Item>
      <Form.Item label="Dirección" name="address" tooltip="Este campo es obligatorio" rules={[{ required: true, message: 'La dirección no es válida' }]}>
        <Input/>
      </Form.Item>
      <Form.Item label="Tipo" name="merchantType" tooltip="Este campo es obligatorio" rules={[{ required: true, message: 'Por favor, indique el tipo de comerciante' }]}>
        <Input/>
      </Form.Item>
      <Form.Item>
        <Button type="primary">Enviar</Button>
      </Form.Item>
    </Form>
  )
}

export default MerchantFormComponent