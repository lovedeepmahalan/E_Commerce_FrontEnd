package com.trigon.service;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.trigon.entity.Category;
import com.trigon.entity.Product;
import com.trigon.exception.ProductException;
import com.trigon.repository.CategoryRepository;
import com.trigon.repository.ProductRepository;
import com.trigon.repository.UserRepository;
import com.trigon.request.CreateProductRequest;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	CategoryRepository categoryRepo;
	
	@Autowired
	ProductRepository productRepo;
	
	@Autowired
	UserRepository uerRepo;

	@Override
	public Product createProduct(CreateProductRequest req) {
		
		Category topLevel=categoryRepo.findByName(req.getTopLavelCategory());
		
		if(topLevel==null) {
			Category topLevelCategory=new Category();
			topLevelCategory.setName(req.getTopLavelCategory());
			topLevelCategory.setLevel(1);
			categoryRepo.save(topLevelCategory);
		}
		
		Category secondLevel=categoryRepo.findByNameAndParent(req.getSecondLavelCategory(),topLevel.getName());
		
		if(secondLevel==null) {
			Category secondLevelCategory=new Category();
			secondLevelCategory.setName(req.getTopLavelCategory());
			secondLevelCategory.setParentCategory(topLevel);
			secondLevelCategory.setLevel(1);
			categoryRepo.save(secondLevelCategory);
		}
		
		Category thirdLevel=categoryRepo.findByNameAndParent(req.getSecondLavelCategory(),secondLevel.getName());
		
		if(thirdLevel==null) {
			Category thirdLevelCategory=new Category();
			thirdLevelCategory.setName(req.getTopLavelCategory());
			thirdLevelCategory.setParentCategory(secondLevel);
			thirdLevelCategory.setLevel(1);
			categoryRepo.save(thirdLevelCategory);
		}
		
		Product product = new Product();
		product.setTitle(req.getTitle());
		product.setBrand(req.getBrand());
		product.setCategory(thirdLevel);
		product.setColor(req.getColor());
		product.setCreatedAt(LocalDateTime.now());
		product.setDescription(req.getDescription());
		product.setDiscountPercent(req.getDiscountPercent());
		product.setDiscountPrice(req.getDiscountPrice());
		product.setImgUrl(req.getImgURL());
		product.setPrice(req.getPrice());
		product.setSize(req.getSize());
		product.setQuantity(req.getQuantity());
		
		Product savedProduct=productRepo.save(product);
		return savedProduct;
	}

	@Override
	public String deleteProduct(Long id) throws ProductException {
		Product product=getProductById(id);
		product.getSize().clear();
		productRepo.delete(product);
		return "Product has been deleted successfully";
	}

	@Override
	public Product updateProduct(Long id, Product product) throws ProductException {
		Product prod=getProductById(id);
		if(prod.getQuantity()!=0) {
			prod.setQuantity(product.getQuantity());
		}
		return productRepo.save(prod);
	}

	@Override
	public Product getProductById(Long id) throws ProductException {
		Optional<Product> opt=productRepo.findById(id);
		if(opt.isPresent()) {
			return opt.get();
		}
		throw new ProductException("Product is not product with id ::"+ id);
	}

	@Override
	public List<Product> findProductByCategory(String category) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Page<Product> getAllProduct(String category, List<String> colors, List<String> size, Integer minPrice,
			Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {

		Pageable page=PageRequest.of(pageNumber, pageSize);
//		List<Product> prodList=productRepo.filterProducts(category, minPrice, maxPrice, minDiscount, sort);
		
		List<Product> prodList = productRepo.filterProducts(category, minPrice, maxPrice, minDiscount);

		if ("price_low".equalsIgnoreCase(sort)) {
			prodList.sort(Comparator.comparingInt(Product::getDiscountPrice));
		} else if ("price_high".equalsIgnoreCase(sort)) {
			prodList.sort(Comparator.comparingInt(Product::getDiscountPrice).reversed());
		}


		
		if(!colors.isEmpty()) {
			prodList=prodList.stream().filter(p->colors.stream().allMatch(c->c.equalsIgnoreCase(p.getColor()))).collect(Collectors.toList());
		}
		
		if(stock!=null) {
			if(stock.equals("in_stock")) {
				prodList=prodList.stream().filter(p->p.getQuantity()>0).collect(Collectors.toList());
			}else if(stock.equals("out_of_stock")) {
				prodList=prodList.stream().filter(p->p.getQuantity()<1).collect(Collectors.toList());
			}
		}
		
		int startIndex=(int)page.getOffset();
		int lastIndex=Math.min(startIndex+page.getPageSize(), prodList.size());
		
		List<Product> pageContent=prodList.subList(startIndex, lastIndex);
		Page<Product> filterProduct=new PageImpl<>(pageContent,	page,prodList.size());
		return filterProduct;
	}

	@Override
	public List<Product> findAllProducts() {
		List<Product> prodList=productRepo.findAll();
		return prodList;
	}
	
}