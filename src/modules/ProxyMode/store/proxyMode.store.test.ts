import { useProxyModeStore } from "./proxyMode.store";

beforeEach(() => {
  useProxyModeStore.setState({
    proxyMode: "DOMAIN",
  });
});

describe("useProxyModeStore", () => {
  it("should have initial state as DOMAIN", () => {
    expect(useProxyModeStore.getState().proxyMode).toBe("DOMAIN");
  });

  it("should update proxyMode correctly", () => {
    useProxyModeStore.setState({
      proxyMode: "PROXY",
    });
    expect(useProxyModeStore.getState().proxyMode).toBe("PROXY");

    useProxyModeStore.setState({
      proxyMode: "DOMAIN",
    });
    expect(useProxyModeStore.getState().proxyMode).toBe("DOMAIN");
  });
});
