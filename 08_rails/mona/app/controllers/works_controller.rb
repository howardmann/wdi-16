class WorksController < ApplicationController
  def index
    @works = Work.all
  end

  def new
    @work = Work.new
  end

  def create
    work = Work.create( work_params )
    if work.save
      redirect_to "/works/#{work.id}"
    else
      render :new
    end
  end

  def edit
    @work = Work.find(params[:id])
  end

  def update
    work = Work.find(params[:id])
    work.update( work_params )
    redirect_to '/works'
  end

  def show
    @work = Work.find(params[:id])
  end

  def destroy
    work = Work.find(params[:id])
    work.destroy
    redirect_to works_path
  end

  private
    def work_params
      params.require(:work).permit(:title, :year, :medium, :style, :image, :artist_id)
    end
end
