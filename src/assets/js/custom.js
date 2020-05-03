$(function() {
    $('#debit-box').hide();     
    $('#transType').change(function(){
        if($('#transType').val() == 'Debit') {
            $('#debit-box').show(); 
            $('#credit-box').hide();
        } else {
            $('#debit-box').hide(); 
            $('#credit-box').show();
        } 
    });
});