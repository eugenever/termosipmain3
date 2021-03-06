# This file is used by Rack-based servers to start the application.

# --- Start of unicorn worker killer code ---

if ENV['RAILS_ENV'] == 'production' 
  require 'unicorn/worker_killer'

  max_request_min =  1200
  max_request_max =  1500

  # Max requests per worker
  use Unicorn::WorkerKiller::MaxRequests, max_request_min, max_request_max

  oom_min = (90) * (1024**2)
  oom_max = (120) * (1024**2)

  # Max memory size (RSS) per worker
  use Unicorn::WorkerKiller::Oom, oom_min, oom_max
end

# --- End of unicorn worker killer code ---

require ::File.expand_path('../config/environment',  __FILE__)
run Rails.application
