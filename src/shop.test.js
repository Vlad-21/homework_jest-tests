const Shop = require('./shop');

describe('should shop test', () => {
    describe('should get balance', () => {
        const testShop = Shop();
        test('should get default balance bulance', () => {
            expect(testShop.getBalance()).toBe('Your balance 500');
        });
    
        test('should show with buy 10 water', () => {
            testShop.buyWater(10);
            expect(testShop.getBalance()).toBe('Your balance 300');
        });
    });

    describe('should buy water, sell water', () => {
        const testShop = Shop();
        test('should buy water', () => {
            const result = {price: 40, totalWaterCount: 2, waterQuantity: 2};
            expect(testShop.buyWater(2)).toEqual(result);
            expect(testShop.getBalance()).toBe('Your balance 460');
        });

        test('should sell watter', () => {
            const result = {balancePlus: 100, waterCount: 2}
            expect(testShop.sellWater(5)).toEqual(result);
            expect(testShop.getBalance()).toBe('Your balance 560');
        });
    });

    describe('should buy water, sell water', () => {
        const testShop = Shop();
        test('should buy coffee', () => {
            const result = {coffeeQuantity: 8, price: 320, totalCoffeeCount: 8}
            expect(testShop.buyCoffee(8)).toEqual(result);
            expect(testShop.getBalance()).toBe('Your balance 180');
        });
    
    
        test('should sell coffee', () => {
            const result = {balancePlus: 200, coffeeCount: 0}
            expect(testShop.sellCoffee(5)).toEqual(result);
            expect(testShop.getBalance()).toBe('Your balance 380');
        });
    })
});
