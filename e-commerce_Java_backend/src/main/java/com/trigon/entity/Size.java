package com.trigon.entity;

public class Size {

	
	public Size(String name, int quantity) {
		super();
		this.name = name;
		this.quantity = quantity;
	}
	private String name;
	private int quantity;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	@Override
	public String toString() {
		return "Size [name=" + name + ", quantity=" + quantity + "]";
	}
	
	
}
