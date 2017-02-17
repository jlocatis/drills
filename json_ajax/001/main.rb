require "sinatra"
require 'json'
require 'net/http'
require 'pry'

get "/" do
    erb :home
end

get "/people" do
    peoples = erb :info
    return peoples
end