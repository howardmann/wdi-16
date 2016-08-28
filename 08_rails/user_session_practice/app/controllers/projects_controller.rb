class ProjectsController < ApplicationController
  before_action :authorize, :only => [:new]

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
    @project = @current_user.projects.new
  end

  def create
    project = @current_user.projects.create(project_params)
    if project.save
      flash[:success] = 'New project created'
      redirect_to user_path(@current_user)
    else
      render :new
    end
  end

  def edit
    @project = @current_user.projects.find(params[:id])
  end

  def update
    project = @current_user.projects.find(params[:id])
    project.update(project_params)
    if project.save
      flash[:success] = 'Project updated'
      redirect_to user_path(@current_user)
    end
  end

  def destroy
    project = @current_user.projects.find(params[:id])
    project.destroy
    flash[:success] = 'Project destroyed'
    redirect_to user_path(@current_user)
  end

  private
    def project_params
      params.require(:project).permit(:name, :description)
    end

    def authorize
      unless @current_user.present?
        flash[:error] = "You must be logged in to add a new project"
        redirect_to login_path
      end
    end
end
