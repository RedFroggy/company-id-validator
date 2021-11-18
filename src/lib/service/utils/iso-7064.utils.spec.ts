import {Iso7064Utils} from "./iso-7064.utils";

describe('ISO7064 unit tests', () => {

  it('should validate number with ISO7064 Mod 11 10', () => {
    expect(Iso7064Utils.mod1110Validation('794623')).toBeTruthy();
    expect(Iso7064Utils.mod1110Validation('002006673085')).toBeTruthy();

    expect(Iso7064Utils.mod1110Validation('794624')).toBeFalsy();
    expect(Iso7064Utils.mod1110Validation('002706673085')).toBeFalsy();
  });
});
