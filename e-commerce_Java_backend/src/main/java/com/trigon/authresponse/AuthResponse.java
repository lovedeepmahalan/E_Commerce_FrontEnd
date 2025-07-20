package com.trigon.authresponse;

public class AuthResponse {

	
	public AuthResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AuthResponse(String jwt, String msg) {
		super();
		this.jwt = jwt;
		this.msg = msg;
	}
	String jwt;
	String msg;
	@Override
	public String toString() {
		return "AuthResponse [jwt=" + jwt + ", msg=" + msg + "]";
	}
	public String getJwt() {
		return jwt;
	}
	public void setJwt(String jwt) {
		this.jwt = jwt;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	
}
