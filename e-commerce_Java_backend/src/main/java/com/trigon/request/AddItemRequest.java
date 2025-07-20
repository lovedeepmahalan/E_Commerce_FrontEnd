package com.trigon.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddItemRequest {

	private Long productId;
	private String sizee;
	private int quantity;
	private Integer price;
}
