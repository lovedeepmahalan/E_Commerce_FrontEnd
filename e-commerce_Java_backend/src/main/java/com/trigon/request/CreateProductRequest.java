package com.trigon.request;

import java.util.HashSet;
import java.util.Set;

import com.trigon.entity.Size;

public class CreateProductRequest {

	
	public CreateProductRequest(String title, String description, int discountPrice, int price, int discountPercent,
			int quantity, String brand, String color, String imgURL, Set<Size> size, String topLavelCategory,
			String secondLavelCategory, String thirdLavelCategory) {
		super();
		this.title = title;
		this.description = description;
		this.discountPrice = discountPrice;
		this.price = price;
		this.discountPercent = discountPercent;
		this.quantity = quantity;
		this.brand = brand;
		this.color = color;
		this.imgURL = imgURL;
		this.size = size;
		this.topLavelCategory = topLavelCategory;
		this.secondLavelCategory = secondLavelCategory;
		this.thirdLavelCategory = thirdLavelCategory;
	}
	public CreateProductRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	private String title;
	private String description;
	private int discountPrice;
	private int price;
	private int discountPercent;
	private int quantity;
	private String brand;
	private String color;
	private String imgURL;
	private Set<Size> size=new HashSet<Size>();
	private String topLavelCategory;
	private String secondLavelCategory;
	private String thirdLavelCategory;
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getDiscountPrice() {
		return discountPrice;
	}
	public void setDiscountPrice(int discountPrice) {
		this.discountPrice = discountPrice;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getDiscountPercent() {
		return discountPercent;
	}
	public void setDiscountPercent(int discountPercent) {
		this.discountPercent = discountPercent;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getImgURL() {
		return imgURL;
	}
	public void setImgURL(String imgURL) {
		this.imgURL = imgURL;
	}
	public Set<Size> getSize() {
		return size;
	}
	public void setSize(Set<Size> size) {
		this.size = size;
	}
	public String getTopLavelCategory() {
		return topLavelCategory;
	}
	public void setTopLavelCategory(String topLavelCategory) {
		this.topLavelCategory = topLavelCategory;
	}
	public String getSecondLavelCategory() {
		return secondLavelCategory;
	}
	public void setSecondLavelCategory(String secondLavelCategory) {
		this.secondLavelCategory = secondLavelCategory;
	}
	public String getThirdLavelCategory() {
		return thirdLavelCategory;
	}
	public void setThirdLavelCategory(String thirdLavelCategory) {
		this.thirdLavelCategory = thirdLavelCategory;
	}
	@Override
	public String toString() {
		return "CreateProductRequest [title=" + title + ", description=" + description + ", discountPrice="
				+ discountPrice + ", price=" + price + ", discountPercent=" + discountPercent + ", quantity=" + quantity
				+ ", brand=" + brand + ", color=" + color + ", imgURL=" + imgURL + ", size=" + size
				+ ", topLavelCategory=" + topLavelCategory + ", secondLavelCategory=" + secondLavelCategory
				+ ", thirdLavelCategory=" + thirdLavelCategory + "]";
	}
	
	
}
