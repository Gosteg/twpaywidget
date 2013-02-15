var TwWidget = function(form) {
    this.form = jQuery(form);
    this.init();
}

TwWidget.prototype = {
    init: function() {
        this.targetAmount = this.form.find('input[name="amount"]').val();
        this.targetCurrency = this.form.find('input[name="currency"]').val();
        
        this.placeholderDiv = jQuery('<div name="tw-widget-place-holder"></div>');
        this.sourceValueInput = jQuery('<input style="width: 100px; text-align: right;" value="" disabled>');
        this.currencyListSelect = jQuery('<select name="currencies" style="width: 70px; text-align: center;"></select>');
        this.redirectButton = jQuery('<input type="image" value="Pay with Transferwise">');
        
        this.fillSelectByCurrencies(this.currencyListSelect);
        
        this.form.append(this.placeholderDiv);
        
        this.placeholderDiv.append(this.sourceValueInput);
        this.placeholderDiv.append(this.currencyListSelect);
        this.placeholderDiv.append(this.redirectButton);
        
        
        var self = this;
        this.redirectButton.click(function() {
            self.buttonClickHandler();
        });
        
        this.currencyListSelect.change(function() {
        	self.calculateSourceAmountForTargetValues(self.sourceValueInput);
        });
    },
    
    buttonClickHandler: function() {
    	this.sourceAmmount = this.sourceValueInput.val();
    	this.sourceCurrency = this.currencyListSelect.select().val();
        alert('http://www.transferwise.com/pay/' + this.sourceCurrency + '/' + this.targetCurrency + '?sourceValue=' + this.sourceAmmount + '?targetValue=' + this.targetAmount);
    },
    
    fillSelectByCurrencies: function(select) {
    	jQuery.getJSON("/widget-test/TWRemoteService/getCurrencyList/", function(result) {
    		$.each(result, function(key, val) {
    			select.append($("<option />").val(val).text(val));
    		});
    	});
    },
    
    calculateSourceAmountForTargetValues: function(input) {
    	this.sourceAmmount = this.sourceValueInput.val();
    	this.sourceCurrency = this.currencyListSelect.select().val();
    	
    	jQuery.get("/widget-test/TWRemoteService/calculate/", { targetAmount: this.targetAmount, targetCurrency: this.targetCurrency, sourceCurrency: this.sourceCurrency}, function(result) {
    		input.val(result);
    	});
    }
}

jQuery(function() {
    jQuery('.web-site-form-class').each(function(index, el) {
        new TwWidget(el);
    });
    
})