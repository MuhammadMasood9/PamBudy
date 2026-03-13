import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import type { DiscountedProduct, TopCategory } from "@/lib/types";

export function useTopDiscountedProducts() {
  return useQuery({
    queryKey: ["top-discounted-products"],
    queryFn: async () => {
      const { data, error } = await supabase.rpc("get_top_discounted_products");
      if (error) throw error;
      return data as DiscountedProduct[];
    },
  });
}

export function useTopCategories() {
  return useQuery({
    queryKey: ["top-categories"],
    queryFn: async () => {
      const { data, error } = await supabase.rpc("get_top_categories");
      if (error) throw error;
      return data as TopCategory[];
    },
  });
}
