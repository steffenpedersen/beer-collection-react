import { beersService } from "./beersService";

test("should get beers", async () => {
    const beers = await beersService.getBeers("");
    expect(beers).toBeDefined();
    expect(beers.length).toBeGreaterThan(0);
});

test("should get beers by name", async () => {
    const beers = await beersService.getBeers("pilsner");
    expect(beers).toBeDefined();
    expect(beers.length).toBeGreaterThan(0);
});

test("should get beer", async () => {
    const beer = await beersService.getBeer("1");
    expect(beer).toBeDefined();
    expect(beer.id).toBe(1);
});
