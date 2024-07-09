echo "Building the React application..."

npm run build

echo "Refresh data..."

rm -rf /var/www/bless/*
cp -r dist/* /var/www/bless/

echo "Restarting Nginx..."

sudo systemctl restart nginx

echo "Deployment complete."