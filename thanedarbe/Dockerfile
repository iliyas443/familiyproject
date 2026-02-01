# Use official Python image
FROM python:3.12-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app

# Copy requirements first
COPY requirements.txt /app/

# Install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the rest of the Django project
COPY . /app/

# Expose port 8000
EXPOSE 8000

# Run migrations and start server
CMD python manage.py migrate && python manage.py runserver
