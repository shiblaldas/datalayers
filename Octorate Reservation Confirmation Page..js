<script>
  dataLayer.push({ ecommerce: null }); // Clear previous ecommerce data

  dataLayer.push({
    event: "sld_purchase",
    ecommerce: {
      transaction_id: octorateReservation.refer,
      value: octorateReservation.total,
      currency: octorateReservation.currency,      
      start_date: octorateReservation.checkin,
      end_date: octorateReservation.checkout,
      nights: octorateReservation.nights,
      people : octorateReservation.pax,     
      email: octorateReservation.email,
      phone: octorateReservation.phone,
      firstName: octorateReservation.firstName,
      lastName: octorateReservation.lastName,
      country: octorateReservation.country,

      items: [{
        item_id: octorateReservation.rooms[0].id,
        item_name: octorateReservation.rooms[0].name,
        price: octorateReservation.rooms[0].total,
        quantity: octorateReservation.rooms[0].quantity
      }]
    }
  });
</script>
