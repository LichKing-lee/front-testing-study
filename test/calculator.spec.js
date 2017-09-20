describe("Calculator Test", () => {
    before(() => this.expect = chai.expect);

    it("plus test", () => {
        let result = calculator.plus(1, 2, 3);
        this.expect(result).to.equal(6);
    });

    it("minus test", () => {
        let result = calculator.minus(3, 2, 1);
        this.expect(result).to.equal(0);
    });
});