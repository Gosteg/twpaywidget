var TwWidget = function(form) {
	this.form = jQuery(form);
	this.init();
}

TwWidget.prototype = {
	init : function() {
		var placeholderDiv = jQuery('<div class="tw-widget-place-holder" name="tw-widget-place-holder"></div>');
		var redirectButton = jQuery('<input class="tw-widget-button" type="button" value="Pay with Transferwise"/>');
		this.sourceValueInput = jQuery('<input class="sourceAmount" value="" disabled="disabled"/>');
		this.currencyListSelect = jQuery('<select class="currencyList" name="currencies"></select>');
		this.fillSelectByCurrencies(this.currencyListSelect);
		
		this.form.append(placeholderDiv);
		placeholderDiv.append(this.sourceValueInput);
		placeholderDiv.append(this.currencyListSelect);
		placeholderDiv.append(redirectButton);
		
		var self = this;
		redirectButton.click(function() {
			self.buttonClickHandler();
		});

		this.currencyListSelect.change(function() {
			self.calculateSourceAmountForTargetValues(self.sourceValueInput);
		});
	},

	buttonClickHandler : function() {
		var targetAmount = this.form.find('input[name="amount"]').val();
		var targetCurrency = this.form.find('input[name="currency"]').val();
		var sourceAmmount = this.sourceValueInput.val();
		var sourceCurrency = this.currencyListSelect.select().val();

		alert('http://www.transferwise.com/pay/' + sourceCurrency + '/'
				+ targetCurrency + '?sourceValue=' + sourceAmmount
				+ '?targetValue=' + targetAmount);
	},

	fillSelectByCurrencies : function(select) {
		jQuery.getJSON("/widget-test/TWRemoteService/getCurrencyList/",
				function(result) {
					$.each(result, function(key, val) {
						select.append($("<option />").val(val).text(val));
					});
					
					select.change();
				});
	},

	calculateSourceAmountForTargetValues : function(input) {
		var targetAmount = this.form.find('input[name="amount"]').val();
		var targetCurrency = this.form.find('input[name="currency"]').val();
		var sourceCurrency = this.currencyListSelect.select().val();

		jQuery.get("/widget-test/TWRemoteService/calculate/", {
			targetAmount : targetAmount,
			targetCurrency : targetCurrency,
			sourceCurrency : sourceCurrency
		}, function(result) {
			input.val(result);
		});
	}
}

jQuery(function() {
	jQuery('head').append('<link rel="stylesheet" href="css/twwidget.css" type="text/css" />');
	
	jQuery('.web-site-form-class').each(function(index, el) {
		new TwWidget(el);
	});
})