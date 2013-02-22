package widget.test

import grails.converters.JSON

class TWRemoteServiceController {

    def index() { }
	
	def getCurrencyList() {
		
		render TwWidgetUtils.getCurrencyCodesList() as JSON
	}
	
	def calculate() {
		TwWidgetService twService = new TwWidgetService()
		
		//TODO validation of incomming params
		def paramsTargetAmount = params.targetAmount.replaceAll(",", ".")
		
		def targetAmount = paramsTargetAmount.toFloat()
		def targetCurrency = params.targetCurrency
		def sourceCurrency = params.sourceCurrency
		
		def result = twService.calulateSourceAmount(targetAmount, targetCurrency, sourceCurrency)
		//TODO validation of result
		
		render result 
	}
}
