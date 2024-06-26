import Video from "@/components/dashboard/Video";
import { client } from "@/lib/mercadopago";
import { Payment } from "mercadopago";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  searchParams: {
    payment_id: string;
  };
}

async function checkPayment(paymentId: string) {
  console.log(paymentId);

  try {
    console.log("entro a checkPayment");

    const payment = await new Payment(client).get({
      id: paymentId,
    });

    console.log(payment);

    if (payment.status != "approved") {
      return <div>Hubo un error con el pago</div>;
    }
  } catch (error) {
    console.log(error);
    return <div>Hubo un error con el pago</div>;
  }
}
async function GraciasPage(props: Props) {
  const { searchParams } = props;

  if (!searchParams.payment_id) {
    return <div>Hubo un error revisa si el cargo fué descontado</div>;
  }

  await checkPayment(searchParams.payment_id);

  return (
    <Video video="/gira.mp4"/>
  );
}

export default GraciasPage;
