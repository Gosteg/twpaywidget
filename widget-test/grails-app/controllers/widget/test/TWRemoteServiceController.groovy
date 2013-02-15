package widget.test

import grails.converters.JSON

class TWRemoteServiceController {

    def index() { }
	
	def getCurrencyList() {
		List<String> list = new ArrayList<String>()
		list.add("EUR")
		list.add("USD")
		list.add("RUB")
		
		render list as JSON
	}
	
	def calculate() {
		render "Calculated amount. ta: " + params.targetAmount + ", tc: " + params.targetCurrency + ", sc: " + params.sourceCurrency
	}
}
