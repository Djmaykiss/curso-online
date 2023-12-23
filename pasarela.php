<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script src="https://www.paypal.com/sdk/js?client-id=AXjPDFrytYSJqnuvOfTfIwlLxgKw73QiYik-FsdlzxjihKI_fXkQODodJlbYiD36wDmxTqEaZSfBNo0J
currency=USA"></script>
        
</head>
<body>

<div id="paypal-button.container"></div>

<script>
    paypal.Button.({
        style{
            color: 'blue',
            shape: 'pill'
            label: 'pay'
            },
            createOrder: function(data, actions){
                return action.order.create({
                    purchase_units: [{
                        amount:{
                            value:'60',  // Can reference variables or functions. Must be less than 17,000 US
                            }
                    }]
                });
            },
            onApprove:function(data,actions) {
                action.order.capture().then(function (detalle)){
                    
                }
                },

            oncancel: function(data){
                alert("pago cancelado")
                console.log(data)
            }
        }
    ) render('#paypal-button-container')
</script>

</body>
</html>