describe("Calculator Test", () => {
    it("plus test", () => {
        let result = calculator.plus(1, 2, 3);
        expect(result).to.equal(6);
    });

    it("minus test", () => {
        let result = calculator.minus(3, 2, 1);
        expect(result).to.equal(0);
    });
});