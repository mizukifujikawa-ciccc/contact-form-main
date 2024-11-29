$(function() {
    $("form").validate({
        rules: {
            firstName: {
                required: true,
            },
            lastName: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            queryType: {
                required: true,
                minlength: 1
            },
            message: {
                required: true,
            },
            consent: {
                required: true,
            },
        },
        messages: {
            firstName: {
            required: "This field is required",
          },
          lastName: {
            required: "This field is required",
          },
          email: {
            required: "Please enter a valid email address",
          },
          queryType: {
            required: "Please select a query type",
          },
          message: {
            required: "This field is required",
          },
          consent: {
            required: "To submit this form, please consent to being contacted",
          },
        },
        errorElement: "div",
        errorPlacement: function (error, element) {
            error.appendTo(element.data("error_place"));
        },
      });
})