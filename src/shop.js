const Shop = function() {
    let balance = 500;
    let waterPrice = 20;
    let waterCount = 0;
    let coffeeCount = 0;
    let coffeePrice = 40;

    function getBalance() {
        return `Your balance ${balance}`;
    }

    function buyWater(n) {
        let price = waterPrice * n;
        if(checkBalance(balance, price)) {
            waterCount += n;
            return {
                price: price,
                waterQuantity: n,
                totalWaterCount: waterCount,
            }
        } else {
            console.log("ERROR");
        }
    }

    function buyCoffee(n) {
        let price = coffeePrice * n;
        if(checkBalance(balance, price)) {
            coffeeCount += n;
            return {
                price: price,
                coffeeQuantity: n,
                totalCoffeeCount: coffeeCount,
            }
        } else {
            console.log("ERROR");
        }
    }

    function sellWater(n) {
        let price = waterPrice * n;
        balance += price;
        waterCount - n;
        return {
            waterCount: waterCount,
            balancePlus: price,
        }
    }

    function sellCoffee(n) {
        let price = coffeePrice * n;
        balance += price;
        coffeeCount - n;
        return {
            coffeeCount: waterCount,
            balancePlus: price,
        }
    }

    function checkBalance(currentBalance, currentPrice) {
        if (currentBalance - currentPrice > 0) {
            balance = currentBalance - currentPrice;
            return true;
        }
        console.log("На балансі не вистачає коштів");
        return false;
    }

    return {
        waterCount: waterCount,
        coffeeCount: coffeeCount,
        getBalance: getBalance,
        buyWater: buyWater,
        buyCoffee: buyCoffee,
        sellWater: sellWater,
        sellCoffee: sellCoffee,
    }
}

const shop = Shop();
console.log(shop);
console.log(shop.getBalance());
console.log(shop.buyWater(20));
console.log(shop.buyCoffee(2));
console.log(shop.sellWater(10));
console.log(shop.getBalance());
console.log(shop.sellCoffee(1));
console.log(shop.getBalance());
console.log(shop.waterCount);

module.exports = Shop;