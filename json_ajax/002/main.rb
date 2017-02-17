require 'pry'
require 'sinatra'

get "/" do
	erb :index
end

get "/getstuff" do
	test = erb :comments
	return test
end