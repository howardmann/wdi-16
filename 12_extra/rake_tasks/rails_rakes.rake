namespace :db do
  desc "Drop, rebuild and reseed the database"
  task :regenerate do
    Rake::Task['db:drop'].invoke
    Rake::Task['db:create'].invoke
    Rake::Task['db:migrate'].invoke
    Rake::Task['db:seed'].invoke
  end
end

namespace :heroku do
  desc "Deploy changes to heroku"
  task: :deploy do
    sh "git push origin master"
    sh "git push heroku master"
  end
end
