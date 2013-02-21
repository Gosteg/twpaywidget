package widget.test

import grails.converters.JSON

class TWRemoteServiceController {

    def index() { }
	
	def getCurrencyList() {
		def list = ["EUR", "USD", "RUB"]
		
		render list as JSON
	}
	
	def calculate() {
		render "ta: " + params.targetAmount + ", tc: " + params.targetCurrency + ", sc: " + params.sourceCurrency
	}
}
