<script>
  // Clear previous ecommerce data
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({ ecommerce: null });

  // Push new ecommerce purchase event
  dataLayer.push({
    event: "sld_purchase", // Use "purchase" for GA4 ecommerce tracking
    ecommerce: {
      transaction_id: octorateReservation.refer,
      value: octorateReservation.total,
      currency: octorateReservation.currency,
      coupon: octorateReservation.coupon, // Optional

      items: [{
        item_id: octorateReservation.rooms[0].id,
        item_name: octorateReservation.rooms[0].name,
        price: octorateReservation.rooms[0].total,
        quantity: octorateReservation.rooms[0].quantity
      }]
    },

    // Custom parameters (outside ecommerce block for GA4 custom dimensions)
    start_date: octorateReservation.checkin,
    end_date: octorateReservation.checkout,
    nights: octorateReservation.nights,
    people: octorateReservation.pax,
    email: octorateReservation.email,
    phone: octorateReservation.phone,
    firstName: octorateReservation.firstName,
    lastName: octorateReservation.lastName,
    country: octorateReservation.country
  });
</script>
