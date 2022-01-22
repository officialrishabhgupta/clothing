import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) =>{
    const priceForStripe =price * 100;
    const publishableKey = 'pk_test_51KKhQFSFc92eVbV0ivk5206L5GgsghhAzjyUqLDu5ahDGY1Numzb8GSBavMFr5pEIAH63GNXFdZZuRFl2gxllPF700n8qE1vFZ';


    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/Cuz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;