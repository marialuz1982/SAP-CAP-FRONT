/*global QUnit*/

sap.ui.define([
	"biblioteca/controller/Biblioteca.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Biblioteca Controller");

	QUnit.test("I should test the Biblioteca controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
