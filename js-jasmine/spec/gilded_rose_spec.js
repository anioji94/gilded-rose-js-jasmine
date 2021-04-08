var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {


	
	describe("Item", function() {

		it("should foo", function() {
			const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
			const items = gildedRose.updateQuality();
			expect(items[0].name).toEqual("foo");
		});
	});
	
	describe("Shop", function() {
		describe("#updateQuality()", function() {
			it("should deplete sellIn value every day", function() {
				const gildedRose = new Shop([ new Item("foo", 1, 1) ]);
				const items = gildedRose.updateQuality();
				expect(items[0].sellIn).toEqual(0)
			});

			it("should deplete Quality score every day", function() {
				const gildedRose = new Shop([ new Item("foo", 1, 1) ]);
				const items = gildedRose.updateQuality();
				expect(items[0].quality).toEqual(0)
			});


		})
	});
});