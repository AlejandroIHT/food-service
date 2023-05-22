import React from "react";
import { renderHook, waitFor } from "@testing-library/react";
import { useProductList } from "./useProductList";
import { product } from "../../utils/mocks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { productList } from "../../services/productList/productList";

jest.mock("../../services/productList/productList");
const mockProductList = productList as jest.MockedFunction<typeof productList>;

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useProductList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should return an array of products", async () => {
    mockProductList.mockImplementation(
      () => Promise.resolve({ data: { amiibo: [product] }, status: 200 }) as any
    );
    const { result } = renderHook(() => useProductList(), {
      wrapper,
    });
    await waitFor(() =>
      expect(result.current.data).toEqual({ amiibo: [product] })
    );
  });
});
