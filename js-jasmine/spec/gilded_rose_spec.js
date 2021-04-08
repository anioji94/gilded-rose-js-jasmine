var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {
	beforeEach(function() {
		gildedRose = new Shop([ new Item("foo", 1, 1) ]);
	});

	
	describe("Item", function() {

		it("should foo", function() {
			const items = gildedRose.updateQuality();
			expect(items[0].name).toEqual("foo");
		});
	});
	
	describe("Shop", function() {
		describe("#updateQuality()", function() {
			it("should deplete sellIn value every day", function() {
				const items = gildedRose.updateQuality();
				expect(items[0].sellIn).toEqual(0)
			});

			it("should deplete Quality score every day", function() {
				const items = gildedRose.updateQuality();
				expect(items[0].quality).toEqual(0)
			});

			it("should increase the quality of 'Aged Brie' daily", function() {
				let brie = new Item("Aged Brie", 1, 1)
				gildedRose.items.push(brie);
				const items = gildedRose.updateQuality();
				expect(items[1].quality).toEqual(2)
			})

		})
	});
});