import { AvailablePipe } from "./available.pipe";

describe('PipeTransform pipe',()=> {
    let pipe: AvailablePipe;
    beforeEach(()=> {
        pipe = new AvailablePipe;
    });
    it('should return "YES" if value is true', ()=> {
        let value: boolean = true;

        let resValue: string = pipe.transform(value);

        expect(resValue).toBe('YES');
    });
    it('should return "NO" if value is false', ()=> {
        let value: boolean = false;

        let resValue: string = pipe.transform(value);

        expect(resValue).toBe('NO');
    });
});