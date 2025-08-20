// unit test for IntegerStorage

const IntegerStorage =  artifacts.require("IntegerStorage");

contract ('Integer Storage', () => {
    it ('Should deploy smart contract', async () => {
        const instance = await IntegerStorage.deployed();
        console.log(instance.address);
        assert(instance.address !== '');
    });

    it ('Should get the desired result for getValue and setValue function', async () => {
        const instance = await IntegerStorage.deployed();
        await instance.setValue(88);
        const value = await instance.getValue();
        assert(value.toNumber() === 88);
    });
});