require('./bootstrap');

$(document).ready(function () {

    var SITEURL = "{{url('/')}}";

    $.ajaxSetup({

        headers: {

            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

        }

    });



    var calendar = $('#calendar').fullCalendar({

        editable: true,

        events: SITEURL + "/fullcalendareventmaster",

        displayEventTime: true,

        editable: true,

        eventRender: function (event, element, view) {

            if (event.allDay === 'true') {

                event.allDay = true;

            } else {

                event.allDay = false;

            }

        },

        selectable: true,

        selectHelper: true,

        select: function (start, end, allDay) {

            var title = prompt('titre de l\'évènement:');



            if (title) {

                var start = $.fullCalendar.formatDate(start, "Y-MM-DD HH:mm:ss");

                var end = $.fullCalendar.formatDate(end, "Y-MM-DD HH:mm:ss");



                $.ajax({

                    url: SITEURL + "/fullcalendareventmaster/create",

                    data: 'title=' + title + '&start=' + start + '&end=' + end,

                    type: "POST",

                    success: function (data) {

                        displayMessage("votre évènement à bien été ajouté");

                        $('#calendar').fullCalendar('removeEvents');

                        $('#calendar').fullCalendar('refetchEvents' );

                    }

                });

                calendar.fullCalendar('renderEvent',

                        {

                            title: title,

                            start: start,

                            end: end,

                            allDay: allDay

                        },

                true

                        );

            }

            calendar.fullCalendar('unselect');

        },

         

        eventDrop: function (event, delta) {

                    var start = $.fullCalendar.formatDate(event.start, "Y-MM-DD HH:mm:ss");

                    var end = $.fullCalendar.formatDate(event.end, "Y-MM-DD HH:mm:ss");

                    $.ajax({

                        url: SITEURL + '/fullcalendareventmaster/update',

                        data: 'title=' + event.title + '&start=' + start + '&end=' + end + '&id=' + event.id,

                        type: "POST",

                        success: function (response) {

                            displayMessage("La mise a jour a bien été effectué");

                        }

                    });

                },

        eventClick: function (event) {

            var deleteMsg = confirm("Etes vous sur de vouloir supprimer votre evenement");

            if (deleteMsg) {

                $.ajax({

                    type: "POST",

                    url: SITEURL + '/fullcalendareventmaster/delete',

                    data: "&id=" + event.id,

                    success: function (response) {

                        if(parseInt(response) > 0) {

                            $('#calendar').fullCalendar('removeEvents', event.id);

                            displayMessage("votre event a bien été supprimé");

                        }

                    }

                });

            }

        }

    });

});



function displayMessage(message) {

    $(".response").css('display','block');

    $(".response").html(""+message+"");

    setInterval(function() { $(".response").fadeOut(); }, 4000);

}
