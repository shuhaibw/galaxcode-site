FROM python:3.11

# Install Xvfb
RUN apt update && apt install -y xvfb

# Install PyVirtualDisplay
RUN pip install pyvirtualdisplay

# Install tini
RUN apt update && apt install -y tini

# Set up the virtual display
RUN mkdir -p /var/run/xvfb
RUN Xvfb :99 -ac -screen 0 1280x1024x24 &
ENV DISPLAY :99

# Install Ghostscript
RUN apt update && apt install -y ghostscript

# Copy requirements.txt
COPY ./requirements.txt /code/requirements.txt

# Install dependencies
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# Copy your app code
WORKDIR /code
COPY . /code

# Expose the port
EXPOSE 4243

# Run your app with tini
CMD ["tini", "--", "uvicorn", "app:app", "--host", "0.0.0.0", "--port", "4243", "--forwarded-allow-ips", "*", "--proxy-headers"]