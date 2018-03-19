# class ApplicationController < ActionController::API
class ApplicationController < ActionController::Base
  include Knock::Authenticable
end
