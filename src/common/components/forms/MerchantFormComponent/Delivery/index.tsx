'use client'

import { FC} from 'react';
import { Button, Form, Input, Select} from 'antd';
import { message, notification } from 'antd';
import { createMerchant, updateMerchant } from '../Infrastructure';
import { useRouter } from 'next/navigation';
import { MerchantFormComponentProps } from '../interface';

const MerchantFormComponent: FC<MerchantFormComponentProps> = ({data, clients}) => {
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
      key={data?.id}
      form={form}
      layout="vertical"
      initialValues={data ? {...data} : {}}
      onFinish={handleSubmit}
    >
    <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">{data ? "Actualizar comerciante" : "Nuevo comerciante"}</h1>
      <Form.Item label="Nombre" name="name" rules={[{ required: true, message: 'Por favor, indique el nombre' }]}>
        <Input/>
      </Form.Item>
      <Form.Item label="Dirección" name="address" rules={[{ required: true, message: 'Por favor, indique la dirección' }]}>
        <Input/>
      </Form.Item>
      <Form.Item label="Tipo de comerciante" name="merchantType" rules={[{ required: true, message: 'Por favor, indique el tipo de comerciante' }]}>
          <Select placeholder="Seleccione el tipo de comerciante" options={[
            {
              value: 'MERCHANT_TYPE_PERSONAL_SERVICES', 
              label: 'Servicios Personales' 
            },
            { 
              value: 'MERCHANT_TYPE_FINANCIAL_SERVICES', 
              label: 'Servicios Financieros' 
            }]}
          />
      </Form.Item>
      <Form.Item label="Cliente" name="clientId" >
        <Select
          placeholder="Seleccione un cliente" 
          options={clients?.map(client => ({
            value: client.id,
            label: `${client.name}`,
          }))}
        />
      </Form.Item>
    
      <Form.Item>
        <Button type="primary" htmlType="submit">Enviar</Button> 
      </Form.Item>
    </Form>
  )
}

export default MerchantFormComponent