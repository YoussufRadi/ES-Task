import { PannelModule } from "./pannel.module";

describe("PannelModule", () => {
  let pannelModule: PannelModule;

  beforeEach(() => {
    pannelModule = new PannelModule();
  });

  it("should create an instance", () => {
    expect(pannelModule).toBeTruthy();
  });
});
